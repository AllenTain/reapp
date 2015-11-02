class TimecardsController < ApplicationController
  def new
  end

  def index
    @timecards 	= Timecard.all
    @timecard 	= Timecard.new
    @params = params
  end

  def show
  end

  def create
    respond_to do |format|
      format.json { render :json => @timecards }
    end
  end
end
